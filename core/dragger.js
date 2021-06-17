/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Methods for dragging a bubble visually.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.BubbleDragger');

/** @suppress {extraRequire} */
goog.require('Blockly.constants');
goog.require('Blockly.Events');
/** @suppress {extraRequire} */
goog.require('Blockly.Events.CommentMove');
goog.require('Blockly.utils');
goog.require('Blockly.utils.Coordinate');

goog.requireType('Blockly.BlockDragSurfaceSvg');
goog.requireType('Blockly.IDraggable');
goog.requireType('Blockly.WorkspaceSvg');


/**
 * An abstract class for a dragger.  It moves things on around the workspace
 * when they are being dragged by a mouse or touch.
 * @param {!Blockly.IDraggable} item The item on the to drag.
 * @param {!Blockly.WorkspaceSvg} workspace The workspace to drag on.
 * @constructor
 */
Blockly.Dragger = function(item, workspace) {
  /**
   * The item on the bubble canvas that is being dragged.
   * @type {!Blockly.IDraggable}
   * @private
   */
  this.draggingItem_ = item;

  /**
   * The workspace on which the bubble is being dragged.
   * @type {!Blockly.WorkspaceSvg}
   * @private
   */
  this.workspace_ = workspace;

  /**
   * Which delete area the mouse pointer is over, if any.
   * @type {?Blockly.IDragTarget}
   * @private
   */
  this.deleteArea_ = null;

  /**
   * Whether the item would be deleted if dropped immediately.
   * @type {boolean}
   * @private
   */
  this.wouldDeleteItem_ = false;

  /**
   * The location of the top left corner of the dragging item's body at the
   * beginning of the drag, in workspace coordinates.
   * @type {!Blockly.utils.Coordinate}
   * @private
   */
  this.startXY_ = this.draggingItem_.getRelativeToSurfaceXY();

  /**
   * Whether to move the block to the drag surface when it is dragged.
   * True if it should move, false if it should be translated directly.
   * @type {boolean}
   * @private
   */
  this.useDragSurface_ =
      Blockly.utils.is3dSupported() && !!workspace.getBlockDragSurface();

  /**
   * The drag surface to move item to during a drag, or null if none should
   * be used.  Block dragging and bubble dragging use the same surface.
   * @type {Blockly.BlockDragSurfaceSvg}
   * @private
   */
  this.dragSurface_ =
      this.useDragSurface_ ? workspace.getBlockDragSurface() : null;
};


/**
 * Sever all links from this object.
 * @package
 * @suppress {checkTypes}
 */
Blockly.Dragger.prototype.dispose = function() {
  this.draggingItem_ = null;
  this.workspace_ = null;
  this.dragSurface_ = null;
};

/**
 * Start dragging the item.  This includes moving it to the drag surface.
 * @protected
 */
Blockly.Dragger.prototype.startDrag = function() {
  if (!Blockly.Events.getGroup()) {
    Blockly.Events.setGroup(true);
  }



  this.draggingItem_.setAutoLayout(false);

  this.workspace_.setResizesEnabled(false);
  if (this.useDragSurface_) {
    this.moveToDragSurface_();
  }
  this.draggingItem_.setDragging(true);
  this.setToolboxStyle_();
};

/**
 * Start dragging the item.  This includes moving it to the drag surface.
 * @protected
 */
Blockly.Dragger.prototype.setToolboxStyle_ = function() {
  var toolbox = this.workspace_.getToolbox();
  if (toolbox && typeof toolbox.addStyle == 'function') {
    var style = this.draggingItem_.isDeletable() ? 'blocklyToolboxDelete' :
        'blocklyToolboxGrab';
    toolbox.addStyle(style);
  }
};

/**
 * Start dragging the item.  This includes moving it to the drag surface.
 * @protected
 */
Blockly.Dragger.prototype.setToolboxStyle_ = function() {
  var toolbox = this.workspace_.getToolbox();
  if (toolbox && typeof toolbox.addStyle == 'function') {
    var style = this.draggingItem_.isDeletable() ? 'blocklyToolboxDelete' :
        'blocklyToolboxGrab';
    toolbox.addStyle(style);
  }
};

/**
 * Move the item onto the drag surface at the beginning of a drag.  Move the
 * drag surface to preserve the apparent location of the item.
 * @protected
 */
Blockly.Dragger.prototype.moveToDragSurface_;




