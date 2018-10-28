import { NgModule } from "@angular/core";
import { FormElementsModule } from "./form-elements/form-elements.module";
import { ButtonsModule } from "./buttons/buttons.module";
import { ModalModule } from "./modals/modal.module";
import { NotificationModule } from "./notifications/notification.module";
import { PopupMenuModule } from "./popup-menu/popup-menu.module";
import { InfiniteScrollModule } from "./infinite-scroll/infinite-scroll.module";
import { TileModule } from "./tiles/tile.module";
import { ChecklistModule } from "./checklist/checklist.module";
import { SvgIconModule } from "./svg-icon/svg-icon.module";
import { AutoCompleteModule } from "./autocomplete/autocomplete.module";
import { SearchModule } from "./search/search.module";
import { TooltipModule } from "./tooltip/tooltip.module";
import { TagCloudModule } from './tag-cloud/tag-cloud.module';
import { TabsModule } from "./tabs/tabs.module";
import { LoaderModule } from "./loader/loader.module";
import { AccordionModule } from "./accordion/accordion.module";
import { EllipsisModule } from "./ellipsis/ellipsis.module";
import { SimplePopupMenuModule } from "./simple-popup-menu/simple-popup-menu.module";


@NgModule({
    imports: [
        ModalModule,
        NotificationModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        InfiniteScrollModule,
        TileModule,
        ChecklistModule,
        AutoCompleteModule,
        SearchModule,
        TooltipModule,
        SvgIconModule,
        TagCloudModule,
        TabsModule,
        LoaderModule,
        AccordionModule,
        EllipsisModule,
        SimplePopupMenuModule,
        MultilineEllipsisModule,
        EllipsisModule,
        SimplePopupMenuModule,
        CommonDirectiveModule],
    exports: [
        ModalModule,
        NotificationModule,
        FormElementsModule,
        ButtonsModule,
        PopupMenuModule,
        InfiniteScrollModule,
        TileModule,
        ChecklistModule,
        AutoCompleteModule,
        SearchModule,
        TooltipModule,
        SvgIconModule,
        TagCloudModule,
        TabsModule,
        LoaderModule,
        AccordionModule,
        EllipsisModule,
        SimplePopupMenuModule,
        MultilineEllipsisModule,
        SimplePopupMenuModule,
        CommonDirectiveModule
    ]
})
export class SdcUiComponentsModule {}

export { SdcUiComponentsNg1Module } from './ng1.module';

import * as SdcUiComponents from './components';
import * as SdcUiServices from './services';
import * as SdcUiCommon from './common/index';
import {CommonDirectiveModule} from "./utils/common-directive.module";

export { SdcUiComponents };
export { SdcUiServices };
export { SdcUiCommon };




// let components = SdcUiComponents;
// let services = SdcUiServices;
// let common = SdcUiCommon

// export const SdcUi = {
//     components,
//     services,
//     common
// };
