import {Plugin} from 'obsidian';


export default class SimpleDisguisePlugin extends Plugin {
	async onload() {
		this.addRibbonIcon('eye-off', 'Disguise', () => {
			this.toggleStyle()
		});
	}

	private toggleStyle() {
		const workspaceRoot=document.querySelector('.workspace-split.mod-root')
		if(!workspaceRoot)return
		const alreadyDisguise=workspaceRoot.hasClass('content-disguise')
		workspaceRoot.toggleClass('content-disguise',!alreadyDisguise)
	}
}
