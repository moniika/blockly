/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The abstract class for a component with custom behaviour when a
 * block or bubble is dragged over or dropped on top of it.
 * @author kozbial@google.com (Monica Kozbial)
 */

'use strict';

goog.provide('Blockly.DragTarget');

goog.require('Blockly.IDragTarget');

goog.requireType('Blockly.utils.Rect');


/**
 * Abstract class for a component with custom behaviour when a block or bubble
 * is dragged over or dropped on top of it.
 * @implements {Blockly.IDragTarget}
 * @constructor
 * @template T
 */
Blockly.DragTarget = function() {};

/**
 * Returns the bounding rectangle of the drag target area in pixel units
 * relative to the Blockly injection div.
 * @return {?Blockly.utils.Rect} The component's bounding box. Null if drag
 *   target area should be ignored.
 */
Blockly.DragTarget.prototype.getClientRect;

/**
 * Handles when a cursor with a block or bubble enters this drag target.
 * @param {!T} _dragElement The block or bubble currently being dragged.
 */
Blockly.DragTarget.prototype.onDragEnter = function(_dragElement) {
  // no-op
};

/**
 * Handles when a cursor with a block or bubble exits this drag target.
 * @param {!T} _dragElement The block or bubble currently being dragged.
 */
Blockly.DragTarget.prototype.onDragExit = function(_dragElement) {
  // no-op
};

/**
 * Handles when a block or bubble is dropped on this component. Should not
 *     handle delete here.
 * @param {!T} _block The block or bubble currently dropped.
 */
Blockly.DragTarget.prototype.onDrop = function(_block) {
  // no-op
};
