import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { TestComponent } from './test/test.component';
import { DigitcountPipe } from './digitcount.pipe';
import { DebugComponent } from './debug/debug.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ 
     AppComponent, ExpenseEntryComponent, ExpenseEntryListComponent, TestComponent, DigitcountPipe, DebugComponent 
  ], 
     imports: [ 
    BrowserModule,
    HttpClientModule
  ], 
  providers: [], 
  bootstrap: [AppComponent] 
}) 
export class AppModule { }
