import { Denops } from "https://deno.land/x/denops_std@v1.0.0/mod.ts";

export async function main(denops: Denops): Promise<void> {
	denops.dispatcher = {
		async sb(): Promise<void> {
			await denops.cmd("normal yiw");
			const s = (await denops.eval("@@")) as string;
			await denops.cmd(`let @@ = '${SwitchBoolean(s)}'`);
			await denops.cmd('normal viw"_dP`[');
		},
	};

	await denops.cmd(
		`command! SwitchBoolean call denops#request('${denops.name}', 'sb', [])`
	);
}

const SwitchBoolean = (s: string): boolean => {
	switch (s.toLowerCase()) {
		case "false":
			return true;
		default:
			return false;
	}
};
