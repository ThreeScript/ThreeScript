/**
 * author betobyte / www.rpt.com.br/site/threejslive
 */

/* ========================================================================== */
/* LinkedNode                                                                 */
/* ========================================================================== */

S3D.LinkedNode = function(linkedList, object, previous, next) {
   this.linkedList = linkedList;
   this.object = object;
   this.previous = previous;
   if (this.previous) {
      this.previous.next = this;
   } else {
      this.linkedList.first = this;
   }
   this.next = next;
   if (this.next) {
      this.next.previous = this;
   } else {
      this.linkedList.last = this;
   }
};

/* ========================================================================== */
/* LinkedList                                                                 */
/* ========================================================================== */

S3D.LinkedList = function() {
   // S3D.Object3D.call(this);
   this.linkedNodeCount = 0;
   this.linkedNodeIndex = -1;
   this.first = null;
   this.last = null;
   this.clearList();
};

/* -------------------------------------------------------------------------- */
/*
S3D.LinkedList.prototype = new S3D.Object3D();
S3D.LinkedList.prototype.constructor = S3D.LinkedList;
*/
/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.clearList = function() {
   while (this.last !== null) {
      this.last = this.last.previous;
      this.last.next = null;
   }
   this.first = null;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.count = function() {
   return this.linkedNodeCount;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.index = function() {
   return this.linkedNodeIndex;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.replace = function(index, object) {
   this.delete(index);
   this.insert(index, object);
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.delete = function(index) {
   var linkedNode = this.getLinkedNode(index);
   if (index === 0) {
      if (linkedNode.next) {
         linkedNode.next.previous = null;
      }
      this.first = linkedNode.next;
   } else {
      if (linkedNode.next) {
         linkedNode.next.previous = linkedNode.previous;
      } else {
         this.last = linkedNode.previous;
      }
      linkedNode.previous.next = linkedNode.next;
   }
   this.linkedNodeCount--;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.insert = function(index, object) {
   if ((index < 0) || (index > this.linkedNodeCount))
      return null;
   var linkedNode = null;
   if (this.linkedNodeCount === 0) {
      linkedNode = new S3D.LinkedNode(this, object, null, null);
      // this.first = linkedNode;
      // this.last = linkedNode;
   } else if (index === 0) {
      linkedNode = new S3D.LinkedNode(this, object, null, this.first);
      // this.first = linkedNode;
   } else if (index === this.linkedNodeCount) {
      linkedNode = new S3D.LinkedNode(this, object, this.last, null);
      // this.last = linkedNode;
   } else {
      var linkedNodeAtIndex = this.getLinkedNode(index);
      linkedNode = new S3D.LinkedNode(this, object, linkedNodeAtIndex.previous, linkedNodeAtIndex);
   }
   this.linkedNodeCount++;
   return linkedNode;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.getLinkedNode = function(index) {
   if ((index < 0) || (index >= this.linkedNodeCount))
      return null;
   var linkedNode = this.first;
   for (var i = 0; i < index; i++) {
      linkedNode = linkedNode.next;
   }
   return linkedNode;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.remove = function(index) {
   var linkedNode = this.getLinkedNode(index);

   if (!linkedNode)
      return null;

   if (linkedNode.previous)
      linkedNode.previous.next = linkedNode.next;

   if (linkedNode.next)
      linkedNode.next.previous = linkedNode.previous;

   if (linkedNode === this.first)
      this.first = linkedNode.next;

   if (linkedNode === this.last)
      this.last = linkedNode.previous;

   this.linkedNodeCount--;

   return linkedNode;
};

/* -------------------------------------------------------------------------- */

S3D.LinkedList.prototype.forEach = function(maxIndex, func) {
   var nextX = 0;
   var sep = 20;
   var node = this.first;
   for (var i = 0; i < maxIndex; i++) {
      var o = node.object;
      if (func) {
         func(o, nextX);
      }
      var cg = o.charGeometry;
      if (cg.char === " ") {
         nextX += (30 + sep);
      } else {
         nextX += Math.abs(cg.max.x - cg.min.x) + sep;
      }
      node = node.next;
   }
   return nextX;
};

/* ========================================================================== */
