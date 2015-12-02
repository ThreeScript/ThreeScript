/**
 * @author Betobyte / www.studddio.com
 */

/* ========================================================================== */
/* S3D.S3dActionChain                                                          */
/* ========================================================================== */

S3D.S3dActionChain = function(actionChainParam) {
   this.actionLL = new S3D.LinkedList();
   if (actionChainParam) {
      this.setActionChainParam(actionChainParam);
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.setActionChainParam = function(actionChainParam) {
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.execActions = function() {
   var node = this.actionLL.first;
   while (node) {
      var action = node.object;
      if (action) {
         action.execAction(); 
         /*
         if (action.status === S3D_ACTION_STATUS_STARTING) {
            if (action.startTime <= Date.Now()) {
               action.status = S3D_ACTION_STATUS_RUNNING;
            }
         }
         if (action.status === S3D_ACTION_RUNNING) {
            var result = action.execAction();   
            if (!result) {
               action.status === S3D_ACTION_STOPPED;
            }
         }
         */
      }
      node = node.next;
   }
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.removeUnusedActions = function() {
   /*
   var node = this.actionLL.first;
   while (node) {
      var action = node.object;
      if (action) {
         var result = action();
         if (!result) {
            this.removeAction();
         }
      }
      node = node.next;
   }
   */
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.insertAction = function(action) {
   this.actionLL.insert(actionLL.linkedNodeCount,action);
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.insertMoveOn = function(actionMoveOnParam) {
   actionMoveOnParam.owner = this;
   this.actionLL.insert(this.actionLL.linkedNodeCount,new S3D.S3dActionMoveOn(actionMoveOnParam));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.insertMoveTo = function(actionMoveToParam) {
   actionMoveToParam.owner = this;
   this.actionLL.insert(this.actionLL.linkedNodeCount,new S3D.S3dActionMoveTo(actionMoveToParam));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.insertRotateOn = function(actionRotateOnParam) {
   actionRotateOnParam.owner = this;
   this.actionLL.insert(this.actionLL.linkedNodeCount,new S3D.S3dActionRotateOn(actionRotateOnParam));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.insertRotateTo = function(actionRotateToParam) {
   actionRotateToParam.owner = this;
   this.actionLL.insert(this.actionLL.linkedNodeCount,new S3D.S3dActionRotateTo(actionRotateToParam));
};

/* -------------------------------------------------------------------------- */

S3D.S3dActionChain.prototype.deleteAction = function(index) {
   this.actionLL.delete(index);
};

/* ========================================================================== */
