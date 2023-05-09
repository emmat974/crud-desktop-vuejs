<template>
  
  <nav class=" bg-white w-full flex relative justify-between items-center mx-auto mt-5 px-8 h-20">
                <!-- logo -->
                <div class="inline-flex">
                    <h1 class="text-3xl font-bold">Accueil</h1>
                </div>
                <!-- end logo -->

                <!-- search bar -->
                <div class="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
                    <div class="inline-block">
                        <div class="inline-flex items-center max-w-full">
                            <button
                                class="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border bg-[#d9d9d9] rounded-full px-1  py-1"
                                type="button">
                                <div class="block flex-grow flex-shrink overflow-hidden">Recherche ....</div>
                                <div class="flex items-center justify-center relative  h-8 w-8 rounded-full">
                                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                        role="presentation" focusable="false" style="
                                            display: block;
                                            fill: none;
                                            height: 12px;
                                            width: 12px;
                                            stroke: currentcolor;
                                            stroke-width: 5.33333;
                                            overflow: visible;
                                        ">
                                        <g fill="none">
                                            <path
                                                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- end search bar -->

                <!-- login -->
                <div class="flex-initial">
                    <div class="flex justify-end items-center relative">

                        <div class="flex mr-4 items-center">
                            <a class="inline-block py-3 px-4 bg-white text-3xl border rounded-3xl" href="#">
                                <i class="fa-solid fa-bell"></i>
                            </a>
                            <div class="block relative">

                            </div>
                        </div>

                        <div class="block">
                            <div class="inline relative">
                                <button type="button"
                                    class="inline-flex items-center relative py-3 px-4 border rounded-3xl bg-black">
                                    <div class="pl-1">
                                        <h1 class="text-white text-2xl font-bold">JD</h1>
                                    </div>

                                </button>
                            </div>
                        </div>

                        <div class="block">
                            <div class="inline relative">

                                <h3 class="px-2 font-semibold">John Doe</h3>
                                <span class="px-2 text-base font-light">CEO</span>

                            </div>
                        </div>
                    </div>
                </div>
                <!-- end login -->
            </nav>

</template>

<script>
export default {
    name: 'NavBar',
    props: {
        msg: String
    }
}
</script>

