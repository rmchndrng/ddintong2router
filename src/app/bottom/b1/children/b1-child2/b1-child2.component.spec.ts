/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { B1Child2Component } from './b1-child2.component';

describe('Component: B1Child2', () => {
  it('should create an instance', () => {
    let component = new B1Child2Component();
    expect(component).toBeTruthy();
  });
});
