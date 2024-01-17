
import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { ISlashCommand, ISlashCommandPreview,
        ISlashCommandPreviewItem, SlashCommandPreviewItemType,
	SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';

export class TestSlashCommand implements ISlashCommand {
  public command = 'testslash';
  public i18nDescription = 'test';
  public i18nParamsExample = 'test';
  public permission = 'user';
  public providesPreview = true;

  public async executePreviewItem(item: ISlashCommandPreviewItem, context: SlashCommandContext,
                                  read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async executor(context: SlashCommandContext,read: IRead, modify: IModify,
                        http: IHttp, persis: IPersistence): Promise<void> {
    throw new Error('Method not implemented');
  }

  public async previewer(context: SlashCommandContext, read: IRead, modify: IModify,
                         http: IHttp, persis: IPersistence): Promise<ISlashCommandPreview> {
    const i18nTitle = 'title';

    let items: Array<ISlashCommandPreviewItem> = new Array();

    items.push({
      id: 'text',
      type: SlashCommandPreviewItemType.TEXT,
      value: "BUG: not visible",
    })

    items.push({
      id: 'other',
      type: SlashCommandPreviewItemType.OTHER,
      value: 'visible',
    });

    return { i18nTitle, items };
  }
}
