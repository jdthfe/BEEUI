import Picker from '../picker.vue';
import DatePanel from '../panel/date.vue';
import DateRangePanel from '../panel/date-range.vue';

const getPanel = function (type) {
    if (type === 'daterange' || type === 'datetimerange') {
        return DateRangePanel;
    }
    return DatePanel;
};

import { oneOf } from '../../../utils/assist';

export default {
    mixins: [Picker],
    props: {
        type: {
            validator (value) {
                /**
                 * todo  增加week
                 */
                return oneOf(value, ['year', 'month', 'season', 'monthrange', 'week','date', 'daterange', 'datetime', 'datetimerange']);
            },
            default: 'date'
        },
        value: {}
    },
    created () {
        if (!this.currentValue) {
            if (this.type === 'daterange' || this.type === 'datetimerange') {
                this.currentValue = ['',''];
            } else {
                this.currentValue = '';
            }
        }
        this.panel = getPanel(this.type);
    }
};
