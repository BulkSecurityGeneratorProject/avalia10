import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Avalia10SharedModule } from '../../shared';

import {
    TurmaService,
    TurmaPopupService,
    TurmaComponent,
    TurmaDetailComponent,
    TurmaDialogComponent,
    TurmaPopupComponent,
    TurmaDeletePopupComponent,
    TurmaDeleteDialogComponent,
    turmaRoute,
    turmaPopupRoute,
} from './';

let ENTITY_STATES = [
    ...turmaRoute,
    ...turmaPopupRoute,
];

@NgModule({
    imports: [
        Avalia10SharedModule,
        RouterModule.forRoot(ENTITY_STATES, { useHash: true })
    ],
    declarations: [
        TurmaComponent,
        TurmaDetailComponent,
        TurmaDialogComponent,
        TurmaDeleteDialogComponent,
        TurmaPopupComponent,
        TurmaDeletePopupComponent,
    ],
    entryComponents: [
        TurmaComponent,
        TurmaDialogComponent,
        TurmaPopupComponent,
        TurmaDeleteDialogComponent,
        TurmaDeletePopupComponent,
    ],
    providers: [
        TurmaService,
        TurmaPopupService,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Avalia10TurmaModule {}
