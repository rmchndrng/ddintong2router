/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { B1Child1Component } from './b1-child1.component';

describe('Component: B1Child1', () => {
  it('should create an instance', () => {
    let component = new B1Child1Component();
    expect(component).toBeTruthy();
  });
});
