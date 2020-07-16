<template>
    <div id="landingpage" class="home_wrapper">
<div class="section_01">
    <div class="container">
        <div class="columns is-vcentered">
            <div class="column has-text-centered">
                <h2 class="subtitle is-1">Built by Students, <br/> For Students</h2>
            </div>
            <div class="column">
                <img src="./../../assets/home_img_01.png" />
            </div>
        </div>
        <div class="columns">
            <div class="column">
            <p>EssayTrack is meant to be a free-to-use, minimal platform for rising seniors that want a place to organize all their college application essays.</p>
            <p class="has-text-right"><button class="sgn_up_btn" @click="$router.push('login')">Get Started - It's Free</button></p>
            </div>
        </div>
    </div>
</div>
<div class="section_02">
    <div class="container is-fluid">
        <div class="columns">
            <div class="column">
                <h1 class="title is-1">It's never been easier to organize your apps.</h1>
                <div class="sub_head"><p>No more overflowing Excel sheets.<br/>
No more messy whiteboards.</p></div>
            </div>
            <div class="column">
            </div>
        </div>
    </div>
</div>
</div>
</template>
<style>
.sgn_up_btn {
    text-transform: capitalize;
    border-radius: 0;
    border: none;
    background-color: #A6EAFF;
    width: auto;
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
}
.section_02 {
    background-color: #EDEDED;
    clear: left;
    padding: 60px 0;
}
.section_01{
    padding-bottom: 50px;
    float: left;
    width: 100%;
}
.section_02 .sub_head{
    padding-left: 30px;;
}
.home_wrapper{
    padding: 40px 0 80px 0;
}
</style>
