<template>

  <div class="h-[616px] w-full overflow-hidden">
    <div class="h-full flex justify-between items-center">
      <Container>
        <div class="w-[465px] flex flex-col gap-8">
          <h4 class="text-title">Follow us</h4>
          <span class="sub-text">@pokebarboston</span>
          <p class="sub-text">To stay updated with the latest news, promotions, and offerings from the poke restaurant,
            make sure to follow us social media accounts. Don't miss out on any updates</p>
          <div>
            <SocialLinks/>
          </div>
        </div>
      </Container>
      <div>
        <FooterRightTop/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import SocialLinks from "~/components/shared/SocialLinks.vue";
import Container from "~/components/ui/Container.vue";
import FooterRightTop from "assets/helpers/components/FooterRightTop.vue";
</script>