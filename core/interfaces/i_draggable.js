/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview The interface for an object that is draggable.
 * @author kozbial@google.com (Monica Kozbial)
 */

'use strict';

goog.provide('Blockly.IDraggable');

goog.require('Blockly.IDeletable');


/**
 * The interface for an object that can be dragged.
 * @extends {Blockly.IDeletable}
 * @interface
 */
Blockly.IDraggable = function() {};

/**
 * Return the coordinates of the top-left corner of this object
 * the drawing surface's origin (0,0), in workspace units.
 * @return {!Blockly.utils.Coordinate} Object with .x and .y properties in
 *     workspace coordinates.
 * @package
 */
Blockly.IDraggable.prototype.getRelativeToSurfaceXY;

/**
 * Triggers a move callback if one exists at the end of a drag.
 * @param {boolean} adding True if adding, false if removing.
 * @package
 */
Blockly.IDraggable.prototype.setDragging;
