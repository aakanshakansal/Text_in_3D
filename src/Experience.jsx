import { useMatcapTexture, Center, Text3D, OrbitControls } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { Perf } from 'r3f-perf'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const torusGeometry= new THREE.TorusKnotGeometry(1,0.6,16,32)
const material= new THREE.MeshNormalMaterial()



export default function Experience()
{
const donutGroup= useRef()

// const [torusGeometry,setTorusGeometry] = useState()
// const [material,setMaterial] = useState()

const matcapTexture= useMatcapTexture('777D7D_BDCAD2_3E3C2E_B1B8B6', 256)
useEffect(()=>{
    matcapTexture.colorSpace = THREE.SRGBColorSpace
    matcapTexture.needsUpdate=true
    material.matcapTexture= matcapTexture
    material.needsUpdate= true

},[])
useFrame((state,delta)=>{
    for(const donut of donutGroup.current.children){
        donut.rotation.y += delta * 0.3 
    }

})
 
   return <>

        <Perf position="top-left" />

        <OrbitControls makeDefault />
        {/* <torusGeometry ref={setTorusGeometry} args={[1,0.6,16,32]} />
            <meshNormalMaterial ref={setMaterial} /> */}

        
        <Center>
        <Text3D font="./fonts/helvetiker_regular.typeface.json"
        size={0.75}
        material={material}
        height={ 0.2 }
        curveSegments={ 12 }
        bevelEnabled
        bevelThickness={ 0.02 }
        bevelSize={ 0.02 }
        bevelOffset={ 0 }
        bevelSegments={ 5 }>
            Hey! Folks
            {/* <meshNormalMaterial /> */}
        </Text3D>
        </Center>

        <group ref={donutGroup}>

        {  [...Array(70)].map((value,index)=>
            <mesh
            key={index} 
            geometry={torusGeometry}
           material={material}
            position={ [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        ] }
            scale={0.2 + Math.random() * 0.2}
            rotation={ [
            Math.random()  * Math.PI,
            Math.random()  * Math.PI,
            0
        ] }
            >
            {/* <meshNormalMaterial /> */}

        </mesh>
        
        )}

        </group>

        

    </>
}