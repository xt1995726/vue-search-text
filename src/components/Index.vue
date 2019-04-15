<template>
  <div class="index">
    <div class="logo-wrap">
      <a href="https://www.zhangmen.com" target="_blank">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAABICAMAAAByf8/sAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABRUExURUxpcf///////////////////////////////////////////////////////////////////////////////////////////////////////8nORHUAAAAadFJOUwAPr3HR4B7xwGBQoECAkfgsB4jpOElZyGi4ent3uwAAB0VJREFUaN7tmtu6oyoMgEUFVBTwbHn/B92Ek1q11bbTWfPtlZuKRfjFEJJAFBnplJXeFqktVbZ0s6UsmkWOfJDRT5DKwrVoCz7ZAiXL+lCD3qoe/W3werR48QZcClvIV/Uz94lU+hfRZanFjauKe11w4Azutw4QKpVh1BtXXXTuxbvySLp6f6gQIVJ3XQx5PiUglRHOG/Nrbk15PhR92UlC0P0IlVhdEOYeHxx36ebIo0babj1OVYapUC+IoO3IfWPdxSbcFCW2NLpG6MNn2sWYk1i9KZlcmozzsjY83IwhffLMPORlq94WYaabG3Ca5E/Ej1SzspGGHB0+5Fovohe/74EAuVqZ7EfiZ6y3n6KU7fwiD5/x4Ah/hNuYZneZROix1BFegRdC68xT8jvwRH1I2AL8SVV+B04MzDPyO/D0U+Cifhnc2zZNPpwFR4ueYy1P5jSBL53NZawfuYXp/ia4Jh9Oq4qcm6tOfAC0WqKtbXJmWA9WbKXw4CO7k2D3mK2Z3LGh85OznG1xfR28WqwfakGxvWMFLwz2nXSxPGeJitVyq7lRUHm8GoTqGLxZLnzLeXUdnLTb2g/BnVERTR3tg0cRUzH3YmpNnMMK4hWSqI3CHoATcQSOUnUR3HpmcfDUAJxWXgbrQxebRrSGJd5p8ODxBhxna6FHXyKK1VVwfucfr3XcsOT74GEiEbWJap5YFXLfXKMug8cenLD1iMcLcEG9GNqbvjDg5WpypmfBN4SDehWcNTpoWet4vgDfnZwJx+q2BF9MDXos7a3fhAHtC+ALm3wRPGiHB29fjZoG9QL4eA48ca7oI3D6Kjh7BTzdAW+34JNbYx+B6way9JJMK3f8fXCxBp/cRfocnF7zy6qVur4PbvBmcFg6aW0t588Bx3vgpXdiWFBB7U0Vz8FTvBU/A3b+Sj4NXnmcKszfxHrAT8Af9PcgnvucqmT+qg8ee2xf8oeDmzW5spptNMSaSOYW6wfgJNvIgd+SZdUfAIc2EbVenEsl1Ma8PAIXy5c4IfFb4NkuuEm0VianGuIbkxIkTxag74HfdsFNUFAXi2Vt6dcdgIM2kQtWhb0FHu+Dh0RXp06Dp1+dnOwAHKMQmZwFH78K3hyAuwiyUufBb1G2J4dWRUvyOnhyAO4i37oSp8FZpK4Kex083wVP51wuaehJ8Oar4P0OeGb/k5kNReueZ2IZVo774Ml+4BN2AHaEvw4ut+D2HwLO4OjDLF1ghNggF4l98OGrkxNtwUsYZObo0oQ4cJ8MQTe1D15+FXzhHpq0vy42zTr1ieNq0rBxATI0y/2LFB5JlvHo98CbT6WZb9GfBa/vtlII/RB4t99fqT4Djvi9Rg6f4d4BqyAgXu4RvQaeLY2TErNGTp/g5sdpB+tjoZfB08M0WPf2dsr+TsICXPTRR8DF+sPWQ/yGptNs2t9hr3z+ZOQPk/bcOi7FUb4ouDZxQnaUnxDZlX0x5ElSNZxzu/lhdjz0I0bMHQ47+0mS52ZDX5K/fljjV37lV/6vUhNS/5PghVLFL/jhZ0VhF5O81RD2UVpiwIeRirSqYcM6TluKmTRbXVwyTM197U7Gra4uRBwhShnH9NZF/Uix/Rcq4rgzvleK9L+YzYCogeiibSDI12FDax5hlOYpTaeIsLaNT78Nnb1HDR6HGFkqMcY6eBXmfM5IQ+wcEiIpRGetdVBCyq4QSqT2dEiqWuvF4DDGgI1bXdGffBzRnPJipq320ncoBWSsIe07Dn1sjraQorYRYW52RWllNseQCd4zs+XOTFgZD9pVE+0ERxZ72FjEJKozcDaBmg2NCEfSwKmDE4FIQru3orgZp1U3hfMERoYP2eakyVPuwei4SabisLVMRuMTukS87keCp5jbzB8HcGrrTyYd0UDsMPnZktoYoAquvg7i03AV2/yi9t5jaBYCPWx2VPF57l5/3sJ2x1y6kpikR+qcWbdB2UAPLpPXuRHH1q3tTUg+QhUBAi+R2vfv7bvYWIuHK+lSGCV0ZxNfqc2snDcmjhvAkwBujnNm3IHfXLpP1u66X4N35lViUIHROqqDvk39cYiQIqrCFXH5h34Gv5kpJ65w994c5h5cfzORIPcu8+6e1HphsvLcqcq4BOfQ/TDHF+0aXAYFlq6nHFoM4MyA0wvc5dqOA7i0n3ULrpUhLbpGOXBmdZ84cP1YWgdwPIMXRQ+TQUj/H9WdlhTUw4Ln9v3waXA9m1MTfxQrcJhIBMkt+JzXDuDcgBNvItKkmBi7A6dQ0HC0GYamModAYUsBzkdbcPdhsivgCzsewK25ZlvwCBm7mx2A1/NKsAWPEuENfm+Ndh+9DD74k7EyInlupkyZ53DWpeFNR+B+lOdGmaS5D8cnBykxrqI6z2GJ7Mx9ZAuRTHToOOmnitwMg21icIVJB50J1EM557Y53V2oFvX58Gddjunh0ckfKRIGRk+r9l8LwgtFwRl5mIj5mSMODlf79PTkR+U/Id3lhROCJ+QAAAAASUVORK5CYII=">
      </a>
    </div>
    <div class="component-search">
      <search></search>
    </div>
  </div>
</template>
<script>
import Search from './Search'
export default {
  components: {
    Search,
  }
}
</script>
<style scoped>
.index {
  margin-top: 100px;
}
.logo-wrap {
  width: 600px;
  height: 100px;
  position: relative;
  margin: 0px auto;
}
.logo-wrap > a {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.component-search {
  margin-top: 50px;
  display: flex;
  justify-content: center;
}
</style>
