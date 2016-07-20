/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { T1Child3Component } from './t1-child3.component';

describe('Component: T1Child3', () => {
  it('should create an instance', () => {
    let component = new T1Child3Component();
    expect(component).toBeTruthy();
  });
});
