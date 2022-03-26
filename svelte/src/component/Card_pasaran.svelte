<script>
    import { createEventDispatcher } from "svelte";
    export let card_title = ""
    export let card_description = ""
    export let card_status = ""
    export let card_device = "WEBSITE"
    export let card_function = ""
    let dispatch = createEventDispatcher()
    let card_background = "bg-base-300"
    let card_css_style = "cursor:pointer;"
    let card_shadow = "shadow-green-500/40"
    if(card_status == "OFFLINE"){
      card_background = "bg-base-100"
      card_css_style = ""
      card_shadow = ""
    }
</script>
<div on:click={() => dispatch('click',card_function)} class="card {card_background} shadow-lg {card_shadow} rounded-md" style="{card_css_style}">
    {#if card_device == "WEBSITE"}
      <div class="card-body grass items-center text-center">
        <h2 class="card-title text-xs lg:text-sm font-bold">{card_title}</h2>
        <p class="text-xs lg:text-sm">
          {@html card_description}
        </p>
        <div class="card-actions justify-end">
          {#if card_status == "ONLINE"}
            <span class="relative inline-flex">
              <span class="flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-lg bg-green-500/50 opacity-90"></span>
              </span>
              <span class="px-2 py-1 rounded-lg border-green-50 bg-green-500/50 text-white text-sm">{card_status}</span>
            </span>
            {:else}
            <div class="badge">{card_status}</div>
          {/if}
        </div>
      </div>
    {:else}
      <div class="card-body p-3 items-center text-center">
        <h2 class="card-title text-xs font-bold">{card_title}</h2>
        <p class="text-xs">
          {@html card_description}
        </p>
        <div class="card-actions justify-center">
          {#if card_status == "ONLINE"}
            <span class="relative inline-flex">
              <span class="flex h-3 w-3">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-lg bg-green-500/50 opacity-90"></span>
              </span>
              <span class="px-2 py-1 rounded-md border-green-50 bg-green-500/50 text-white text-xs">{card_status}</span>
            </span>
            {:else}
            <div class="badge rounded-md text-xs">{card_status}</div>
          {/if}
        </div>
      </div>
    {/if}
</div>