/*!
 * LL two-way parallel translation - DataModel ConflictAnnotation class
 *
 * @copyright 2019 LL team and others; see LICENSE.txt for terms
 */

/**
 * Annotation to mark human-added text that conflicts with updates
 *
 * @class
 * @extends ve.dm.Annotation
 * @constructor
 * @param {Object} element
 */
ve.dm.LLConflictAnnotation = function VeDmLLConflictAnnotation() {
	// Parent constructor
	ve.dm.LLConflictAnnotation.super.apply( this, arguments );
};

/* Inheritance */

OO.inheritClass( ve.dm.LLConflictAnnotation, ve.dm.Annotation );

/* Static Properties */

ve.dm.LLConflictAnnotation.static.name = 'll/conflict';

ve.dm.LLConflictAnnotation.static.matchTagNames = [ 'span' ];

ve.dm.LLConflictAnnotation.static.matchFunction = function ( domElement ) {
	return domElement.classList.contains( 'll-conflict' );
};

ve.dm.LLConflictAnnotation.static.applyToAppendedContent = false;

ve.dm.LLConflictAnnotation.static.toDataElement = function () {
	// XXX include extra info to display
	return { type: this.name };
};

ve.dm.LLConflictAnnotation.static.toDomElements = function ( dataElement, doc ) {
	var domElement = doc.createElement( 'span' );
	domElement.classList.add( 'll-conflict' );
	return [ domElement ];
};

/* Methods */

/**
 * @return {Object}
 */
ve.dm.LLConflictAnnotation.prototype.getComparableObject = function () {
	return { type: 'll/conflict' };
};

/* Registration */

ve.dm.modelRegistry.register( ve.dm.LLConflictAnnotation );
