/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { T1Child1Component } from './t1-child1.component';

describe('Component: T1Child1', () => {
  it('should create an instance', () => {
    let component = new T1Child1Component();
    expect(component).toBeTruthy();
  });
});
