import { proxy } from "valtio";

const state = proxy({
    intro: true,
    color: '#99CCCC',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './noir logo-min.png',
    fullDecal: './threejs.png',
})

export default state