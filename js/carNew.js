

const newbox = {
        template: `
<div class="newbox">
    <ul>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div> 
        </router-link>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div>
        </router-link>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div>
        </router-link>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div>
        </router-link>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div>
        </router-link>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div>
        </router-link>
        <router-link to="/desc" tag="li" class="item">
            <p class="title"> 最美自主车致尚XT竞争力分析</p>
            <div class="info">
                <span> 07 - 04 06: 30</span>
                <span> 搜狐汽车</span>
            </div>
            <div class="pic-icon"></div>
        </router-link>
    </ul>
    <div class="backtop-box">
        <span>加载中</span>
        <router-link to="/desc" tag="a" class="backtop">返回详情
            <i class="iconfont icon-uparrow"></i>
        </router-link>
    </div>
</div>

    `
    }
const desc = {
    template: `
    <div class="descwrap">
        <div class="descbox">
            <h2> 权利的游戏-- -- --鱼梁木百科 </h2>
            <p class="author"> 2014 - 11 - 26 搜狐汽车 </p>
            <div class="line"> </div>
            <div class="pic">
                <img src="./img/t.jpg" alt="...">
            </div>
            <p class="intro"> 权利的游戏中的鱼梁木是三眼乌鸦藏身的地方</p>
            <section class="content">鱼梁木(Weirwood)是—种遍布维斯特洛大陆的落叶乔木。它的树皮灰臼如骨，叶色深红，有如干只染血手掌。多数鱼梁木的树干上刻有人脸，据说是古代的森林之子在先民渡过狭海而来之前刻上去
            的。[1]现在的自由民和其余先民的后裔会在鱼梁木上继续雕刻。有时还会用树的汁液将雕刻的眼睛染成红色，当汁液滴下，看起来就像心树泣血。
             </section>
    </div>
        <div class="backtop-box">
            <span> 加载中</span>
            <router-link to="/" tag="a" class="backtop"> 返回列表
                <i class="iconfont icon-uparrow"></i>
            </router-link>
        </div>
    </div>
    `
}
const routes = [{
        path: '/',
        component: newbox
    },
    {
        path: '/desc',
        component: desc
    }
]
const router = new VueRouter({
    routes
})
const app = new Vue({
        router
    }).$mount('#app')
