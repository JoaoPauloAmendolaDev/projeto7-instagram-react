import Post from "./post"
import Stories from "./stories"
import SideBar from "./sideBar"

export default function Main(){
    return (
            <div class="corpo">
                <div class="esquerda">
                <div class="stories">
                    <Stories />
                    <div class="setinha">
                        <ion-icon name="chevron-forward-circle"></ion-icon>
                    </div>
                </div>
                <Post/>
                </div>
                <SideBar/>
            </div>
    )
}