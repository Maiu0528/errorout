# What is this?

Get perfect error every time for the non-designer.

# Instalation
npm i errorout --save

Then...

'''

import { errorout } from 'errorout';

    errorout({
        error_type: 'hard',
        padding: false
});
'''

## Options
errorout supports 2 options, oth of which are optional:

* *error_type* - hard | soft (Default is soft)
* *padding* - boolean (Default is false)