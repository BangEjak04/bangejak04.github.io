export default {
    template: `
        <a-scene>
          <a-assets>
              <a-asset-item id="target-file" src="myTarget.zpt"/>
          </a-assets>

          <a-entity camera zappar-camera></a-entity>

          <a-entity zappar-image="#target-file">
              <!-- YOUR 3D CONTENT GOES HERE -->
          </a-entity>
      </a-scene>
    `
}