<script>
    export let total_placeholder = 1;
    export let tipe = "1";
    export let with_flex = "w-1/2";
    let data = []
    for(let i=0;i<parseInt(total_placeholder);i++){
        data = [
            ...data,
            {
                temp: "asd",
            },
        ];
    }
</script>
{#if tipe == "1"}
  {#each data as rec }
  <div class="bg-base-200 border border-base-300 shadow rounded-md p-4 max-w-full w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-1 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-1 bg-slate-300 rounded col-span-2"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
            </div>
            <div class="h-1 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
  </div>
  {/each}
{/if}
{#if tipe == "2"}
  {#each data as rec }
      <div class="animate-pulse flex space-x-4">
        <div class="flex-1 space-y-6 py-1">
          <div class="h-1 bg-slate-200 rounded"></div>
          <div class="space-y-3">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-1 bg-slate-300 rounded col-span-2"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
            </div>
            <div class="h-1 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
  {/each}
{/if}
{#if tipe == "3"}
  {#each data as rec }
      <div class="animate-pulse flex space-x-4 {with_flex}">
        <div class="flex-1 space-y-1 py-1">
          <div class="h-1 bg-slate-200 rounded"></div>
          <div class="space-y-1">
            <div class="grid grid-cols-3 gap-4">
              <div class="h-1 bg-slate-300 rounded col-span-2"></div>
              <div class="h-1 bg-slate-300 rounded col-span-1"></div>
            </div>
            <div class="h-1 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
  {/each}
{/if}