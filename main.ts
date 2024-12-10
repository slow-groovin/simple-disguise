import { App, ItemView,WorkspaceTabs,WorkspaceLeaf ,Editor, MarkdownView, MarkdownEditView,Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';





export default class SimpleDisguisePlugin extends Plugin {
	private styleEnabled: boolean = false;
	async onload() {
		console.log('onload')

		this.addRibbonIcon('eye-off', 'Disguise', () => {
			this.toggleStyle()
		});
	}

	onunload() {
		console.log('onunload')

	}



	private toggleStyle() {
		this.styleEnabled = !this.styleEnabled;

		if (this.styleEnabled) {
			this.applyCustomStyle();
		} else {
			this.removeCustomStyle();
		}
	}

	private applyCustomStyle() {
		const view = this.app.workspace.getActiveViewOfType(ItemView);
		const tabContainer=view?.containerEl?.parentElement?.parentElement

		if (tabContainer) {
			tabContainer.addClass('content-disguise')
		}
	}

	private removeCustomStyle() {
		const view = this.app.workspace.getActiveViewOfType(ItemView);
		const tabContainer=view?.containerEl?.parentElement?.parentElement

		if (tabContainer) {
			tabContainer.removeClass('content-disguise')
		}
	}
}
