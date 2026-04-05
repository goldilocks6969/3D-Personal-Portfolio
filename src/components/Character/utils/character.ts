import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { decryptFile } from "./decrypt";

const FAIR_SKIN = new THREE.Color("#FFFFFF");
const BLACK = new THREE.Color("#0a0a0a");
const SKY_BLUE = new THREE.Color("#5B9BD5");
const SKIN_EMISSIVE = new THREE.Color("#D4A574");
const SKIN_EMISSIVE_INTENSITY = 0.45;

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        const encryptedBlob = await decryptFile(
          "/models/character.enc?v=2",
          "MyCharacter12"
        );
        const blobUrl = URL.createObjectURL(new Blob([encryptedBlob]));

        let character: THREE.Object3D;
        loader.load(
          blobUrl,
          async (gltf) => {
            character = gltf.scene;
            await renderer.compileAsync(character, camera, scene);

            // Log all object names for debugging
            console.log("=== CHARACTER SCENE GRAPH ===");
            character.traverse((child: any) => {
              const type = child.isMesh ? "MESH" : child.isGroup ? "GROUP" : "OBJ";
              const matInfo = child.isMesh
                ? ` mat=${Array.isArray(child.material)
                    ? child.material.map((m: any) => m.name).join(",")
                    : child.material?.name}`
                : "";
              console.log(`  [${type}] "${child.name}"${matInfo}`);
            });

            character.traverse((child: any) => {
              if (child.isMesh) {
                const mesh = child as THREE.Mesh;
                const name = mesh.name || "";
                const parentName = mesh.parent?.name || "";

                // ── SHIRT → plain black ──
                // Match by name or parent name containing BODY or SHIRT
                if (
                  name === "BODY.SHIRT" ||
                  name.includes("BODY") ||
                  name.includes("SHIRT") ||
                  parentName === "BODY.SHIRT" ||
                  parentName.includes("BODY") ||
                  parentName.includes("SHIRT")
                ) {
                  console.log(`>> Applying BLACK SHIRT to mesh: "${name}" (parent: "${parentName}")`);
                  applyFlatColor(mesh, BLACK);
                }

                // ── PANTS → sky blue jeans ──
                if (
                  name === "Pant" ||
                  name.includes("Pant") ||
                  parentName === "Pant" ||
                  parentName.includes("Pant")
                ) {
                  console.log(`>> Applying SKY BLUE PANTS to mesh: "${name}"`);
                  applyFlatColor(mesh, SKY_BLUE, 0.85);
                }



                // ── FACE → fairer skin ──
                if (
                  name === "Face.002" ||
                  name.includes("Face") ||
                  parentName.includes("Face")
                ) {
                  console.log(`>> Applying FAIR SKIN to face: "${name}"`);
                  lightenSkin(mesh, FAIR_SKIN);
                }

                // ── EARS → fairer skin ──
                if (
                  name === "Ear.001" ||
                  name.includes("Ear") ||
                  parentName.includes("Ear")
                ) {
                  console.log(`>> Applying FAIR SKIN to ear: "${name}"`);
                  lightenSkin(mesh, new THREE.Color("#F0CDB8"));
                }

                // ── NECK → fairer skin ──
                if (
                  name === "Neck" ||
                  name.includes("Neck") ||
                  parentName.includes("Neck")
                ) {
                  console.log(`>> Applying FAIR SKIN to neck: "${name}"`);
                  lightenSkin(mesh, FAIR_SKIN);
                }

                // ── HANDS → fairer skin ──
                if (
                  name === "Hand" ||
                  name.includes("Hand") ||
                  parentName === "Hand"
                ) {
                  console.log(`>> Applying FAIR SKIN to hands: "${name}"`);
                  lightenSkin(mesh, FAIR_SKIN);
                }

                // ── EYEBROWS → black ──
                if (
                  name === "Eyebrow" ||
                  name.includes("Eyebrow") ||
                  name.includes("brow")
                ) {
                  console.log(`>> Applying BLACK EYEBROWS to: "${name}"`);
                  applyFlatColor(mesh, BLACK);
                }

                child.castShadow = true;
                child.receiveShadow = true;
                mesh.frustumCulled = true;
              }
            });



            resolve(gltf);
            setCharTimeline(character, camera);
            setAllTimeline();
            character!.getObjectByName("footR")!.position.y = 3.36;
            character!.getObjectByName("footL")!.position.y = 3.36;

            dracoLoader.dispose();
          },
          undefined,
          (error) => {
            console.error("Error loading GLTF model:", error);
            reject(error);
          }
        );
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

/** Apply a flat color to a mesh, removing any texture maps */
function applyFlatColor(
  mesh: THREE.Mesh,
  color: THREE.Color,
  roughness = 0.7,
  metalness = 0.0
) {
  if (Array.isArray(mesh.material)) {
    mesh.material = mesh.material.map((mat) => {
      const newMat = new THREE.MeshStandardMaterial({
        color: color.clone(),
        roughness,
        metalness,
      });
      return newMat;
    });
  } else {
    mesh.material = new THREE.MeshStandardMaterial({
      color: color.clone(),
      roughness,
      metalness,
    });
  }
}

/** Lighten skin aggressively — use white color multiplier + strong warm emissive */
function lightenSkin(mesh: THREE.Mesh, _skinColor: THREE.Color) {
  if (Array.isArray(mesh.material)) {
    mesh.material = mesh.material.map((mat) => {
      const oldMat = mat as THREE.MeshStandardMaterial;
      const newMat = oldMat.clone();
      // White color = full texture brightness
      newMat.color = FAIR_SKIN.clone();
      // Strong warm emissive to wash out the dark skin and make it much fairer
      newMat.emissive = SKIN_EMISSIVE.clone();
      newMat.emissiveIntensity = SKIN_EMISSIVE_INTENSITY;
      return newMat;
    });
  } else {
    const oldMat = mesh.material as THREE.MeshStandardMaterial;
    const newMat = oldMat.clone();
    newMat.color = FAIR_SKIN.clone();
    newMat.emissive = SKIN_EMISSIVE.clone();
    newMat.emissiveIntensity = SKIN_EMISSIVE_INTENSITY;
    mesh.material = newMat;
  }
}

export default setCharacter;
