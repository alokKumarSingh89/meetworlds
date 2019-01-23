import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseComponent } from './purchase/purchase.component';
import { NewPurchaseComponent } from './purchase/new-purchase/new-purchase.component';
import { EditPurchaseComponent } from './purchase/edit-purchase/edit-purchase.component';
import { AppMatModule } from '@app/app-mat/app-mat.module';
import { NbCardModule } from '@nebular/theme';
import { NewReceiveComponent } from './new-receive/new-receive.component';
import {ReceivedDetailsComponent} from '@app/received-details/received-details.component';
const routes: Routes = [
	{
		path: "purchases/new",
		component: NewPurchaseComponent
	},
	{
		path: "purchases/:id/edit",
		component: EditPurchaseComponent
	},
	{
		path: "purchases",
		component: PurchaseComponent
	},
	{
		path: "receive/:id",
		component: NewReceiveComponent
	},
	{
		path: "purchases/receive-details/:id",
		component: ReceivedDetailsComponent
	}
]
@NgModule({
	imports: [
		CommonModule,
		AppMatModule,
		NbCardModule,
		RouterModule.forChild(routes)
	],
	exports: [RouterModule],

	declarations: [
		PurchaseComponent, EditPurchaseComponent, NewPurchaseComponent, NewReceiveComponent,ReceivedDetailsComponent
	]
})
export class SalesRoutingModule { }
