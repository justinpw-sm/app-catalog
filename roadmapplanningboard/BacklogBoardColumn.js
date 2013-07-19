(function () {
    var Ext;

    Ext = window.Ext4 || window.Ext;

    Ext.define('Rally.apps.roadmapplanningboard.BacklogBoardColumn', {
        extend: 'Rally.apps.roadmapplanningboard.PlanningBoardColumn',
        alias: 'widget.backlogplanningcolumn',
        inject: ['planningStore'],
        config: {
            roadmap: null,
            lowestPIType: undefined,
            columnHeaderConfig: {
                headerTpl: 'Backlog'
            }
        },

        getStores: function (models) {
            return [
                Ext.create('Rally.data.WsapiDataStore', {
                    model: this.lowestPIType,
                    autoLoad: true,
                    fetch: ['Value','FormattedID', 'Owner','Name', 'PreliminaryEstimate'],
                    mergeFetch: true
                })
            ];
        },

        isMatchingRecord: function (featureRecord) {
            var _this = this;

            return !this.roadmap || (this.planningStore.findBy(function (planningRecord) {
                return _this.roadmap.plans().getById(planningRecord.get('id')) && 
                    (planningRecord.features().findBy(function (planFeatureRecord) {
                        return featureRecord.get('ObjectID') == planFeatureRecord.get('id');
                }, _this)) >= 0;
            }, this)) === -1;
        }
    });

}).call(this);
