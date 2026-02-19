// ==================== 3D MODELS FOR BOBOIBOY GAME ====================
// File terpisah untuk semua model 3D

// ==================== CREATE GROUND ====================
function createGround(scene) {
    // Ground plane
    const geometry = new THREE.CircleGeometry(100, 64);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x7ec850,
        roughness: 0.8,
        metalness: 0.1
    });
    const ground = new THREE.Mesh(geometry, material);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    ground.receiveShadow = true;
    scene.add(ground);

    // Grid helper for better visual
    const gridHelper = new THREE.GridHelper(200, 50, 0x00ff88, 0x444444);
    gridHelper.position.y = 0.01;
    scene.add(gridHelper);

    // Add some grass patches
    for (let i = 0; i < 200; i++) {
        const grass = new THREE.Mesh(
            new THREE.ConeGeometry(0.2, 0.4, 4),
            new THREE.MeshStandardMaterial({ color: 0x3a9b3a })
        );
        grass.position.x = (Math.random() - 0.5) * 90;
        grass.position.z = (Math.random() - 0.5) * 90;
        grass.position.y = 0.2;
        grass.castShadow = true;
        grass.receiveShadow = true;
        scene.add(grass);
    }
}

// ==================== CREATE BOBOIBOY CHARACTER ====================
function createBoboiboyCharacter(scene, x, z, skinColor, jacketColor, shirtColor, pantsColor, shoesColor) {
    const group = new THREE.Group();

    // === KAKI (PANTAI & LUTUT) ===
    // Paha kiri
    const pahaKiri = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.28, 0.8, 8),
        new THREE.MeshStandardMaterial({ color: pantsColor })
    );
    pahaKiri.position.set(-0.25, 0.5, 0);
    pahaKiri.castShadow = true;
    pahaKiri.receiveShadow = true;
    group.add(pahaKiri);

    // Paha kanan
    const pahaKanan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.28, 0.8, 8),
        new THREE.MeshStandardMaterial({ color: pantsColor })
    );
    pahaKanan.position.set(0.25, 0.5, 0);
    pahaKanan.castShadow = true;
    pahaKanan.receiveShadow = true;
    group.add(pahaKanan);

    // Betis kiri
    const betisKiri = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.22, 0.7, 8),
        new THREE.MeshStandardMaterial({ color: pantsColor })
    );
    betisKiri.position.set(-0.25, 0.0, 0);
    betisKiri.castShadow = true;
    betisKiri.receiveShadow = true;
    group.add(betisKiri);

    // Betis kanan
    const betisKanan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.22, 0.7, 8),
        new THREE.MeshStandardMaterial({ color: pantsColor })
    );
    betisKanan.position.set(0.25, 0.0, 0);
    betisKanan.castShadow = true;
    betisKanan.receiveShadow = true;
    group.add(betisKanan);

    // Sepatu kiri
    const sepatuKiri = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.2, 0.6),
        new THREE.MeshStandardMaterial({ color: shoesColor })
    );
    sepatuKiri.position.set(-0.25, -0.35, 0.15);
    sepatuKiri.castShadow = true;
    sepatuKiri.receiveShadow = true;
    group.add(sepatuKiri);

    // Sepatu kanan
    const sepatuKanan = new THREE.Mesh(
        new THREE.BoxGeometry(0.35, 0.2, 0.6),
        new THREE.MeshStandardMaterial({ color: shoesColor })
    );
    sepatuKanan.position.set(0.25, -0.35, 0.15);
    sepatuKanan.castShadow = true;
    sepatuKanan.receiveShadow = true;
    group.add(sepatuKanan);

    // === BADAN (JAKET) ===
    const badan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.55, 0.55, 1.2, 8),
        new THREE.MeshStandardMaterial({ color: jacketColor })
    );
    badan.position.set(0, 1.1, 0);
    badan.castShadow = true;
    badan.receiveShadow = true;
    group.add(badan);

    // Baju dalam putih di leher
    const bajuDalam = new THREE.Mesh(
        new THREE.CylinderGeometry(0.48, 0.48, 0.3, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    bajuDalam.position.set(0, 1.65, 0);
    bajuDalam.castShadow = true;
    bajuDalam.receiveShadow = true;
    group.add(bajuDalam);

    // Logo B di dada
    const logoBGroup = new THREE.Group();
    
    const lingkaranB = new THREE.Mesh(
        new THREE.TorusGeometry(0.15, 0.04, 8, 20),
        new THREE.MeshStandardMaterial({ color: 0xffaa00 })
    );
    lingkaranB.rotation.x = Math.PI / 2;
    lingkaranB.rotation.z = 0.2;
    logoBGroup.add(lingkaranB);
    
    const hurufB = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.15, 0.05),
        new THREE.MeshStandardMaterial({ color: 0xffaa00 })
    );
    hurufB.position.set(0.02, 0, 0.05);
    logoBGroup.add(hurufB);
    
    logoBGroup.position.set(-0.25, 1.3, 0.35);
    group.add(logoBGroup);

    // === TANGAN ===
    // Lengan kiri
    const lenganKiri = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.18, 0.9, 6),
        new THREE.MeshStandardMaterial({ color: jacketColor })
    );
    lenganKiri.position.set(-0.65, 1.2, 0);
    lenganKiri.rotation.z = 0.1;
    lenganKiri.castShadow = true;
    lenganKiri.receiveShadow = true;
    group.add(lenganKiri);

    // Lengan kanan
    const lenganKanan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.2, 0.18, 0.9, 6),
        new THREE.MeshStandardMaterial({ color: jacketColor })
    );
    lenganKanan.position.set(0.65, 1.2, 0);
    lenganKanan.rotation.z = -0.1;
    lenganKanan.castShadow = true;
    lenganKanan.receiveShadow = true;
    group.add(lenganKanan);

    // Telapak kiri
    const telapakKiri = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 6),
        new THREE.MeshStandardMaterial({ color: skinColor })
    );
    telapakKiri.position.set(-0.85, 0.75, 0);
    telapakKiri.castShadow = true;
    telapakKiri.receiveShadow = true;
    group.add(telapakKiri);

    // Telapak kanan
    const telapakKanan = new THREE.Mesh(
        new THREE.SphereGeometry(0.18, 6),
        new THREE.MeshStandardMaterial({ color: skinColor })
    );
    telapakKanan.position.set(0.85, 0.75, 0);
    telapakKanan.castShadow = true;
    telapakKanan.receiveShadow = true;
    group.add(telapakKanan);

    // === KEPALA ===
    const kepala = new THREE.Mesh(
        new THREE.SphereGeometry(0.45, 16),
        new THREE.MeshStandardMaterial({ color: skinColor })
    );
    kepala.position.set(0, 2.0, 0);
    kepala.castShadow = true;
    kepala.receiveShadow = true;
    group.add(kepala);

    // Mata
    const mataKiri = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    mataKiri.position.set(-0.15, 2.1, 0.4);
    group.add(mataKiri);
    
    const pupilKiri = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    pupilKiri.position.set(-0.15, 2.1, 0.48);
    group.add(pupilKiri);

    const mataKanan = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    mataKanan.position.set(0.15, 2.1, 0.4);
    group.add(mataKanan);
    
    const pupilKanan = new THREE.Mesh(
        new THREE.SphereGeometry(0.04, 6),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    pupilKanan.position.set(0.15, 2.1, 0.48);
    group.add(pupilKanan);

    // Alis
    const alisKiri = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.05, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    alisKiri.position.set(-0.15, 2.18, 0.42);
    alisKiri.rotation.z = 0.1;
    group.add(alisKiri);

    const alisKanan = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.05, 0.1),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    alisKanan.position.set(0.15, 2.18, 0.42);
    alisKanan.rotation.z = -0.1;
    group.add(alisKanan);

    // Hidung
    const hidung = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.12, 6),
        new THREE.MeshStandardMaterial({ color: skinColor })
    );
    hidung.position.set(0, 2.05, 0.5);
    hidung.rotation.x = 0.3;
    group.add(hidung);

    // Mulut
    const mulut = new THREE.Mesh(
        new THREE.TorusGeometry(0.1, 0.03, 4, 16, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0xff8888 })
    );
    mulut.position.set(0, 1.95, 0.5);
    mulut.rotation.x = 0.2;
    mulut.rotation.z = Math.PI;
    group.add(mulut);

    // === TOPI ===
    const topiGroup = new THREE.Group();
    
    // Bagian atas topi (oval)
    const topiAtas = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 8, 4, 0, Math.PI * 2, 0, Math.PI / 2),
        new THREE.MeshStandardMaterial({ color: 0xff6600 })
    );
    topiAtas.scale.set(1, 0.6, 1);
    topiAtas.rotation.x = 0.2;
    topiAtas.position.y = 0.2;
    topiGroup.add(topiAtas);

    // Lepengan depan
    const lepengan = new THREE.Mesh(
        new THREE.BoxGeometry(0.3, 0.1, 0.4),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    lepengan.position.set(0, 0.05, 0.35);
    topiGroup.add(lepengan);

    // Ikat pinggang topi
    const ikat = new THREE.Mesh(
        new THREE.TorusGeometry(0.45, 0.05, 6, 20, Math.PI),
        new THREE.MeshStandardMaterial({ color: 0x000000 })
    );
    ikat.rotation.x = Math.PI / 2;
    ikat.rotation.z = 0.2;
    ikat.position.y = -0.05;
    topiGroup.add(ikat);

    topiGroup.position.set(0, 2.3, -0.1);
    group.add(topiGroup);

    // Set position
    group.position.set(x, 0, z);
    
    return group;
}

// ==================== CREATE ENEMY MODEL ====================
function createEnemyModel(scene, x, z) {
    const group = new THREE.Group();
    const ungu = 0x800080;
    const merahTanduk = 0xff0000;

    // === KAKI ===
    // Paha
    const pahaKiri = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.28, 0.9, 8),
        new THREE.MeshStandardMaterial({ color: ungu })
    );
    pahaKiri.position.set(-0.25, 0.45, 0);
    pahaKiri.castShadow = true;
    pahaKiri.receiveShadow = true;
    group.add(pahaKiri);

    const pahaKanan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.28, 0.9, 8),
        new THREE.MeshStandardMaterial({ color: ungu })
    );
    pahaKanan.position.set(0.25, 0.45, 0);
    pahaKanan.castShadow = true;
    pahaKanan.receiveShadow = true;
    group.add(pahaKanan);

    // === BADAN ===
    const badan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.6, 0.6, 1.4, 8),
        new THREE.MeshStandardMaterial({ color: ungu })
    );
    badan.position.set(0, 1.0, 0);
    badan.castShadow = true;
    badan.receiveShadow = true;
    group.add(badan);

    // === TANGAN ===
    const lenganKiri = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.2, 1.0, 6),
        new THREE.MeshStandardMaterial({ color: ungu })
    );
    lenganKiri.position.set(-0.7, 1.1, 0);
    lenganKiri.rotation.z = 0.2;
    lenganKiri.castShadow = true;
    lenganKiri.receiveShadow = true;
    group.add(lenganKiri);

    const lenganKanan = new THREE.Mesh(
        new THREE.CylinderGeometry(0.22, 0.2, 1.0, 6),
        new THREE.MeshStandardMaterial({ color: ungu })
    );
    lenganKanan.position.set(0.7, 1.1, 0);
    lenganKanan.rotation.z = -0.2;
    lenganKanan.castShadow = true;
    lenganKanan.receiveShadow = true;
    group.add(lenganKanan);

    // === KEPALA BOTAK ===
    const kepala = new THREE.Mesh(
        new THREE.SphereGeometry(0.48, 16),
        new THREE.MeshStandardMaterial({ color: ungu })
    );
    kepala.position.set(0, 1.9, 0);
    kepala.castShadow = true;
    kepala.receiveShadow = true;
    group.add(kepala);

    // Tanduk kiri
    const tandukKiri = new THREE.Mesh(
        new THREE.ConeGeometry(0.15, 0.5, 6),
        new THREE.MeshStandardMaterial({ color: merahTanduk })
    );
    tandukKiri.position.set(-0.3, 2.2, 0.1);
    tandukKiri.rotation.z = -0.3;
    tandukKiri.rotation.x = 0.2;
    tandukKiri.castShadow = true;
    group.add(tandukKiri);

    // Tanduk kanan
    const tandukKanan = new THREE.Mesh(
        new THREE.ConeGeometry(0.15, 0.5, 6),
        new THREE.MeshStandardMaterial({ color: merahTanduk })
    );
    tandukKanan.position.set(0.3, 2.2, 0.1);
    tandukKanan.rotation.z = 0.3;
    tandukKanan.rotation.x = 0.2;
    tandukKanan.castShadow = true;
    group.add(tandukKanan);

    // Mata
    const mataKiri = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    mataKiri.position.set(-0.2, 2.0, 0.45);
    group.add(mataKiri);
    
    const pupilKiri = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 6),
        new THREE.MeshStandardMaterial({ color: 0xff0000 })
    );
    pupilKiri.position.set(-0.2, 2.0, 0.52);
    group.add(pupilKiri);

    const mataKanan = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8),
        new THREE.MeshStandardMaterial({ color: 0xffffff })
    );
    mataKanan.position.set(0.2, 2.0, 0.45);
    group.add(mataKanan);
    
    const pupilKanan = new THREE.Mesh(
        new THREE.SphereGeometry(0.05, 6),
        new THREE.MeshStandardMaterial({ color: 0xff0000 })
    );
    pupilKanan.position.set(0.2, 2.0, 0.52);
    group.add(pupilKanan);

    group.position.set(x, 0, z);
    return group;
}

// ==================== ADD DECORATIONS ====================
function addDecorations(scene) {
    // Add some trees
    for (let i = 0; i < 20; i++) {
        const treeGroup = new THREE.Group();
        
        // Tree trunk
        const trunk = new THREE.Mesh(
            new THREE.CylinderGeometry(0.3, 0.4, 2, 6),
            new THREE.MeshStandardMaterial({ color: 0x8B4513 })
        );
        trunk.position.y = 1;
        trunk.castShadow = true;
        trunk.receiveShadow = true;
        treeGroup.add(trunk);
        
        // Tree leaves
        const leaves1 = new THREE.Mesh(
            new THREE.ConeGeometry(0.8, 1.2, 6),
            new THREE.MeshStandardMaterial({ color: 0x228B22 })
        );
        leaves1.position.y = 2.2;
        leaves1.castShadow = true;
        leaves1.receiveShadow = true;
        treeGroup.add(leaves1);
        
        const leaves2 = new THREE.Mesh(
            new THREE.ConeGeometry(0.6, 1.0, 6),
            new THREE.MeshStandardMaterial({ color: 0x32CD32 })
        );
        leaves2.position.y = 3.0;
        leaves2.castShadow = true;
        leaves2.receiveShadow = true;
        treeGroup.add(leaves2);
        
        // Random position
        treeGroup.position.x = (Math.random() - 0.5) * 60;
        treeGroup.position.z = (Math.random() - 0.5) * 60;
        
        // Don't place too close to center
        if (Math.abs(treeGroup.position.x) < 10 && Math.abs(treeGroup.position.z) < 10) {
            treeGroup.position.x += 20;
        }
        
        scene.add(treeGroup);
    }
    
    // Add some rocks
    for (let i = 0; i < 30; i++) {
        const rock = new THREE.Mesh(
            new THREE.DodecahedronGeometry(0.3 + Math.random() * 0.3),
            new THREE.MeshStandardMaterial({ color: 0x808080 })
        );
        rock.position.x = (Math.random() - 0.5) * 70;
        rock.position.z = (Math.random() - 0.5) * 70;
        rock.position.y = 0.2;
        rock.castShadow = true;
        rock.receiveShadow = true;
        
        if (Math.abs(rock.position.x) < 10 && Math.abs(rock.position.z) < 10) {
            rock.position.x += 15;
        }
        
        scene.add(rock);
    }
}

// ==================== EFFECT FUNCTIONS ====================
function createLightningEffect(start, end) {
    // Will be implemented in main game
    console.log('Lightning effect');
}

function createEarthSpike(position) {
    // Will be implemented in main game
    console.log('Earth spike');
}

function createLaserEffect(start, end) {
    // Will be implemented in main game
    console.log('Laser effect');
}

function createVineEffect(position) {
    // Will be implemented in main game
    console.log('Vine effect');
}

function createWindEffect(start, end) {
    // Will be implemented in main game
    console.log('Wind effect');
}

function createWaterBalls(start, end) {
    // Will be implemented in main game
    console.log('Water balls');
}

function createFireRing(position) {
    // Will be implemented in main game
    console.log('Fire ring');
}

// Export functions untuk digunakan di file utama
window.createBoboiboyCharacter = createBoboiboyCharacter;
window.createEnemyModel = createEnemyModel;
window.createGround = createGround;
window.addDecorations = addDecorations;
window.createLightningEffect = createLightningEffect;
window.createEarthSpike = createEarthSpike;
window.createLaserEffect = createLaserEffect;
window.createVineEffect = createVineEffect;
window.createWindEffect = createWindEffect;
window.createWaterBalls = createWaterBalls;
window.createFireRing = createFireRing;