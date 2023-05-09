<template>

<div class="bg-black text-white w-60">
            <img src="../assets/logo.svg" alt="logo" class="h-25 w-25 ml-10 mt-10 mr-10">
            <nav>
                <a href="#">
                    <div class="text-4xl ml-20 mt-20 mr-20">
                        <i class="fa-sharp fa-solid fa-house"></i>
                    </div>
                </a>

                <a href="#">
                    <div class="text-4xl ml-20 mt-20 mr-20">
                        <i class="fa-solid fa-user-group"></i>
                    </div>
                </a>

            </nav>
</div>
  
</template>

<script>
export default {
    name: 'SideBar',
    props: {
        msg: String
    }
}
</script>
