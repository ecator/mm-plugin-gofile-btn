import React from 'react';

import pluginInfo from '../../plugin.json';
import dog from '../../assets/dog.png';
import Client from './client'

const SIZE = "18px";
const Icon = () => <img src={dog} width={SIZE} height={SIZE} />;


class Plugin {
    initialize(registry, store) {
        registry.registerChannelHeaderButtonAction(

            // icon - JSX element to use as the button's icon
            <Icon />,

            // action - a function called when the button is clicked, passed the channel and channel member as arguments
            async () => {
                const config = await Client.getPluginConfiguration();
                if (config && config.url) {
                    window.open(config.url);
                } else {
                    window.alert("wangwang!!");
                }
            },

            // dropdown_text - string or JSX element shown for the dropdown button description
            'GoFile',

            // tooltip_text - string shown for tooltip appear on hover
            'GoFile'
        );
    }
}

window.registerPlugin(pluginInfo.id, new Plugin());