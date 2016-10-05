/// <reference path="../../../../typings/index.d.ts"/>
/// <reference path="./interfaces.ts"/>
import * as React from 'react';

export default class WorkingOnIt extends React.Component<{}, {}> {
    public render() {
        return <div className="working-on-it-wrapper">
            <img src="/_layouts/15/images/gears_anv4.gif" alt="Working on it..."/>
            <h2>Working on it...</h2>
        </div>;
    }
}