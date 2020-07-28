import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../store/reducers/onePostAdmin';
import 