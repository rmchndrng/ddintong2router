/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { B1Child3Component } from './b1-child3.component';

describe('Component: B1Child3', () => {
  it('should create an instance', () => {
    let component = new B1Child3Component();
    expect(component).toBeTruthy();
  });
});
