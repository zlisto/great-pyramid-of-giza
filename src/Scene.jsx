import { Box, GEO, GOLD, Hills, Palm, mat } from './kit.jsx'

// The Giza plateau: Khufu's pyramid in its white casing with a gilded capstone, the three small
// queens' pyramids to the east, Khafre's and Menkaure's pyramids beyond, and the Great Sphinx.
// Sizes are scaled down (the real base is 230 m) but keep the true proportions.

function Pyramid({ x, z, base, h, color = '#ece2c6', cap = false }) {
  return (
    <group position={[x, 0, z]}>
      <mesh geometry={GEO.pyr} material={mat(color, { roughness: 0.55, flatShading: true })} position={[0, h / 2, 0]} scale={[base, h, base]} />
      {cap && <mesh geometry={GEO.pyr} material={mat('#e3b545', { ...GOLD, flatShading: true })} position={[0, h - (h * 0.06) / 2 + 0.05, 0]} scale={[base * 0.06, h * 0.06, base * 0.06]} />}
    </group>
  )
}

function Sphinx({ x, z }) {
  const stone = '#c9a46a'
  return (
    <group position={[x, 0, z]} rotation={[0, Math.PI / 2, 0]}>
      {/* the lion's body lying down; it faces +z, turned here to face east */}
      <Box p={[0, 2.2, 0]} s={[6, 4.4, 16]} c={stone} />
      <Box p={[-1.8, 1, 9]} s={[1.6, 2, 4]} c={stone} />
      <Box p={[1.8, 1, 9]} s={[1.6, 2, 4]} c={stone} />
      {/* the head in a nemes headdress */}
      <Box p={[0, 6.2, 7]} s={[3.2, 3.8, 3]} c={stone} />
      <mesh geometry={GEO.pyr} material={mat(stone)} position={[0, 8.7, 6.6]} scale={[4.4, 1.6, 3.6]} />
      {[-1, 1].map((sx) => (
        <Box key={sx} p={[1.9 * sx, 5.2, 7]} s={[0.6, 3.2, 2.4]} c={stone} />
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <>
      <Hills color="#cdb27e" r={420} h={30} />
      {/* Khufu's Great Pyramid (base 60 m here, true proportions) */}
      <Pyramid x={0} z={-30} base={60} h={38.2} cap />
      {/* the three queens' pyramids */}
      {[-40, -20, 0].map((z) => (
        <Pyramid key={z} x={45} z={z} base={9} h={6} color="#e0d3b2" />
      ))}
      {/* Khafre's and Menkaure's pyramids beyond */}
      <Pyramid x={-70} z={-120} base={56} h={37} color="#e2d4b0" />
      <Pyramid x={-120} z={-190} base={28} h={17} color="#dccaa3" />
      <Sphinx x={61} z={24} />
      {/* a causeway of stone leading toward the pyramid, and a few palms from the Nile side */}
      <Box p={[0, 0.05, 25]} s={[6, 0.1, 50]} c="#d8c8a2" />
      {[
        [22, 62],
        [26, 70],
        [-30, 70],
        [-36, 64],
        [70, 60],
      ].map(([x, z], i) => (
        <Palm key={i} x={x} z={z} h={7 + (i % 3)} lean={0.08 * (i % 2 ? 1 : -1)} r={i} />
      ))}
    </>
  )
}
