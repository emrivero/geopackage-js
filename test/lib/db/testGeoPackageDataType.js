var GeoPackageDataType = require('../../../lib/db/geoPackageDataType').GeoPackageDataType;

var should = require('chai').should();

describe('GeoPackageDataType tests', function() {

  it('get the enum name', function() {
    var name = GeoPackageDataType.nameFromType(0);
    name.should.be.equal('BOOLEAN');
    name = GeoPackageDataType.nameFromType(1);
    name.should.be.equal('TINYINT');
    name = GeoPackageDataType.nameFromType(2);
    name.should.be.equal('SMALLINT');
    name = GeoPackageDataType.nameFromType(3);
    name.should.be.equal('MEDIUMINT');
    name = GeoPackageDataType.nameFromType(4);
    name.should.be.equal('INT');
    name = GeoPackageDataType.nameFromType(5);
    name.should.be.equal('INTEGER');
    name = GeoPackageDataType.nameFromType(6);
    name.should.be.equal('FLOAT');
    name = GeoPackageDataType.nameFromType(7);
    name.should.be.equal('DOUBLE');
    name = GeoPackageDataType.nameFromType(8);
    name.should.be.equal('REAL');
    name = GeoPackageDataType.nameFromType(9);
    name.should.be.equal('TEXT');
    name = GeoPackageDataType.nameFromType(10);
    name.should.be.equal('BLOB');
    name = GeoPackageDataType.nameFromType(11);
    name.should.be.equal('DATE');
    name = GeoPackageDataType.nameFromType(12);
    name.should.be.equal('DATETIME');
  });

  it('get the enum values', function() {
    var name = GeoPackageDataType.fromName('BOOLEAN');
    name.should.be.equal(0);
    name = GeoPackageDataType.fromName('TINYINT');
    name.should.be.equal(1);
    name = GeoPackageDataType.fromName('SMALLINT');
    name.should.be.equal(2);
    name = GeoPackageDataType.fromName('MEDIUMINT');
    name.should.be.equal(3);
    name = GeoPackageDataType.fromName('INT');
    name.should.be.equal(4);
    name = GeoPackageDataType.fromName('INTEGER');
    name.should.be.equal(5);
    name = GeoPackageDataType.fromName('FLOAT');
    name.should.be.equal(6);
    name = GeoPackageDataType.fromName('DOUBLE');
    name.should.be.equal(7);
    name = GeoPackageDataType.fromName('REAL');
    name.should.be.equal(8);
    name = GeoPackageDataType.fromName('TEXT');
    name.should.be.equal(9);
    name = GeoPackageDataType.fromName('BLOB');
    name.should.be.equal(10);
    name = GeoPackageDataType.fromName('DATE');
    name.should.be.equal(11);
    name = GeoPackageDataType.fromName('DATETIME');
    name.should.be.equal(12);
  });

});
