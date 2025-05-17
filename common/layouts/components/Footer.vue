<template>
  <footer>
    <div>
      <div v-if="isMenu">
        {{null}}
      </div>
      <div v-else>
        <FooterTopContent/>
      </div>
      <div class="bg-dark">
        <Container>
          <div class="h-[323px] w-full">
            <div class="h-full flex flex-col justify-center">
              <div class="flex justify-between items-start">
                <div>
                  <img :src="logo" alt="logo"/>
                  <div class="py-5">
                    <NavMenu customTextColor="text-white"/>
                  </div>
                </div>
                <div class="flex flex-col gap-5 items-end">
                  <div class="flex gap-3">
                    <button class="w-[125px] h-[44px] rounded-[22px] border-[#F96540] border text-[16px] text-[#F96540]">
                      Order Online
                    </button>
                    <button class="w-[125px] h-[44px] rounded-[22px] bg-[#F96540] text-[16px] text-white">Book a Table
                    </button>
                  </div>
                  <div class="flex flex-col items-end gap-3 text-white">
                    <p class="text-[16px]">848 King Street, Mesa, AZ 85201, Boston, USA</p>
                    <a class="text-[16px]" href="mailto:info@pokebar.com">info@pokebar.com</a>
                  </div>
                </div>
              </div>
              <CopyRightSection/>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import FooterTopContent from "~/common/layouts/components/FooterTopContent.vue";
import Container from "~/components/ui/Container.vue";
import logo from '@/assets/images/logo/White-Logo.png';
import NavMenu from "assets/helpers/components/NavMenu.vue";
import CopyRightSection from "assets/helpers/components/CopyRightSection.vue";

const route = useRoute();

const menuPaths = [
  "/menu",
  "/location/menu",
  "/location/delivery",
  "/location/menu/checkout/success",
  "/gift"
]

const isMenu = computed(() =>
    menuPaths.some(path => route.path.startsWith(path))
)
</script>