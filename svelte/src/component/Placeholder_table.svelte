<script>
    export let total_placeholder = 1;
    export let total_colpan = 1;
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
{#each data as rec }
<tr>
    <td colspan="{total_colpan}" class="bg-base-200 border border-base-300 shadow rounded-md w-full mx-auto">
        <div class="animate-pulse flex space-x-2">
            <div class="flex-1 space-y-6 py-1">
                <div class="h-2 bg-slate-200 rounded"></div>
                <div class="space-y-2">
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-2 bg-slate-300 rounded col-span-2"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                    <div class="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
                <div class="h-2 bg-slate-300 rounded"></div>
            </div>
            </div>
        </div>
    </td>
</tr>
{/each}