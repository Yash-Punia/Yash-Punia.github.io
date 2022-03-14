import Entity from './Entity.js'
import './Components/gun.js'
import './Components/bullet.js'
import './Components/balloon.js'

let rightGun = new Entity({
    'gun': 'hand: right; model: ./models/gun.glb',
})

let leftGun = new Entity({
    'gun': 'hand: left; model: ./models/gun.glb',
})

for(let i=0;i<10;i++)
{
    const x = Math.random() * 40 - 20;
    const y = Math.random() * 4 + 1;
    const z = Math.random() * 40 - 20;

    new Entity({
        'balloon':'model: ./models/balloon.glb',
        'position': `${x} ${y} ${z}`,
    })
}