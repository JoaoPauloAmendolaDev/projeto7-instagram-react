import Post from "./post"
import Stories from "./stories"
import SideBar from "./sideBar"

export default function Main(){
    return (
            <div class="corpo">
                <div class="esquerda">
                <div class="stories">
                    <Stories />
                </div>
                <Post/>
                </div>
                <SideBar/>
            </div>
    )
}