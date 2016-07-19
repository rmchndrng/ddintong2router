/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { P1Component } from './p1.component';

describe('Component: P1', () => {
  it('should create an instance', () => {
    let component = new P1Component();
    expect(component).toBeTruthy();
  });
});
