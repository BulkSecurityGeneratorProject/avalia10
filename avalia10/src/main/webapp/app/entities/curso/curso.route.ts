import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { PaginationUtil } from 'ng-jhipster';

import { CursoComponent } from './curso.component';
import { CursoDetailComponent } from './curso-detail.component';
import { CursoPopupComponent } from './curso-dialog.component';
import { CursoDeletePopupComponent } from './curso-delete-dialog.component';

import { Principal } from '../../shared';


export const cursoRoute: Routes = [
  {
    path: 'curso',
    component: CursoComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avalia10App.curso.home.title'
    }
  }, {
    path: 'curso/:id',
    component: CursoDetailComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avalia10App.curso.home.title'
    }
  }
];

export const cursoPopupRoute: Routes = [
  {
    path: 'curso-new',
    component: CursoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avalia10App.curso.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'curso/:id/edit',
    component: CursoPopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avalia10App.curso.home.title'
    },
    outlet: 'popup'
  },
  {
    path: 'curso/:id/delete',
    component: CursoDeletePopupComponent,
    data: {
        authorities: ['ROLE_USER'],
        pageTitle: 'avalia10App.curso.home.title'
    },
    outlet: 'popup'
  }
];
