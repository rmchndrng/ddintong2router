/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { P1Child3Component } from './p1-child3.component';

describe('Component: P1Child3', () => {
  it('should create an instance', () => {
    let component = new P1Child3Component();
    expect(component).toBeTruthy();
  });
});
