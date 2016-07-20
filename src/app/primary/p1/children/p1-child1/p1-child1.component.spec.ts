/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { P1Child1Component } from './p1-child1.component';

describe('Component: P1Child1', () => {
  it('should create an instance', () => {
    let component = new P1Child1Component();
    expect(component).toBeTruthy();
  });
});
