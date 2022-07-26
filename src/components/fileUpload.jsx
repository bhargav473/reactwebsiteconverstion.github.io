import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import file from '../services/fileService';

class FileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      loaded: 0,
      status: true
    };
  }
  checkMimeType = event => {
    //getting file object
    let files = event.target.files;
    //define message container
    let err = [];
    // list allow mime type
    const types = ['image/png', 'image/jpeg', 'image/gif'];
    // loop access array
    for (let x = 0; x < files.length; x++) {
      // compare file type find doesn't matach
      if (types.every(type => files[x].type !== type)) {
        // create error message and assign to container
        err[x] = files[x].type + ' is not a supported format\n';
      }
    }
    for (let z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  maxSelectFile = event => {
    let files = event.target.files;
    if (files.length > 1) {
      const msg = 'Only 1 image can be uploaded at a time';
      event.target.value = null;
      toast.warn(msg);
      return false;
    }
    return true;
  };
  checkFileSize = event => {
    let files = event.target.files;
    let size = 2000000;
    let err = [];
    for (var x = 0; x < files.length; x++) {
      if (files[x].size > size) {
        err[x] = files[x].type + 'is too large, please pick a smaller file\n';
      }
    }
    for (var z = 0; z < err.length; z++) {
      // if message not same old that mean has error
      // discard selected file
      toast.error(err[z]);
      event.target.value = null;
    }
    return true;
  };
  onChangeHandler = event => {
    var files = event.target.files;
    if (
      this.maxSelectFile(event) &&
      this.checkMimeType(event) &&
      this.checkFileSize(event)
    ) {
      // if return true allow to setState
      this.setState({
        selectedFile: files,
        loaded: 0
      });
    }
  };

  onClickHandler = async () => {
    var data = new FormData();
    for (var x = 0; x < this.state.selectedFile.length; x++) {
      data.append('file', this.state.selectedFile[x]);
    }
    try {
      const respo = await file.uploadFile(data);
      if (respo.data.message === 'success') {
        toast.success('upload success');
      }
      this.setState({ status: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        this.setState({ errors });
        toast.error('Upload Fails');
      }
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.state.status ? (
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header card-header-primary'>
                <h4 className='card-title'>File Upload</h4>
                <p className='card-category'>Upload Id Cards</p>
              </div>
              <div className='card-body'>
                <label>Upload Your File </label>
                <input
                  type='file'
                  className='form-control'
                  multiple
                  onChange={this.onChangeHandler}
                />
              </div>
              <button
                type='button'
                className='btn btn-success btn-block'
                onClick={this.onClickHandler}
              >
                Upload
              </button>
            </div>
          </div>
        ) : (
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header card-header-primary'>
                <h4 className='card-title'>File Upload</h4>
                <p className='card-category'>Upload Id Cards</p>
              </div>
              <div className='card-body'>Pending</div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default FileUpload;
