import React from 'react';

import pluginInfo from '../../plugin.json';
import dog from '../../assets/dog.png';
import Client from './client'

// Courtesy of https://feathericons.com/
const Icon = () => <img src={dog} width="80%" />;


class Plugin {
    initialize(registry, store) {
        registry.registerCallButtonAction(

            // icon - JSX element to use as the button's icon
            <Icon/>,

            // action - a function called when the button is clicked, passed the channel and channel member as arguments
            // null,
            async () => {
                const config = await Client.getPluginConfiguration();
                if (config && config.url){
                    window.open(config.url);
                }else{
                    window.alert("wangwang!!");
                }
            },

            // dropdown_text - string or JSX element shown for the dropdown button description
            'Gofile'
        );
    }
}

window.registerPlugin(pluginInfo.id, new Plugin());