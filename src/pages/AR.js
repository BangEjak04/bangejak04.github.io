export default {
    template: `
        <a-scene>
            <!-- Ask user for camera permissions -->
            <a-entity zappar-permissions-ui id="permissions"></a-entity>
            <!-- Browser Compatibility -->
            <a-entity zappar-compatibility-ui id="compatibility"></a-entity>

            <a-assets>
            </a-assets>

            <a-entity camera zappar-camera></a-entity>

            <a-entity zappar-instant="placement-mode: true" id="instant-group">

                <!-- PLACE 3D OBJECTS HERE TO TRACK FROM THE INSTANT ANCHOR -->
                <a-box position="0 0.5 0"></a-box>

            </a-entity>

        </a-scene>
    `
}